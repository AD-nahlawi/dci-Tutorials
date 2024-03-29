// ! This is a helper function to delegate events from an element to any child with a specified selector.
// ? Use where required.

function delegateEvent(fromElement, eventName, targetSelector, callback) {
  fromElement.addEventListener(eventName, event => {
    let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];

    if (targetsList.includes(event.target)) {
      callback(event);
    }
  });
}
let todoList =document.querySelector('.todo-list');

/*global jQuery, Handlebars, Router */

jQuery(function($) {
  'use strict';

  Handlebars.registerHelper('eq', function(a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });

  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var util = {
    uuid: function() {
      /*jshint bitwise:false */
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
          16
        );
      }

      return uuid;
    },
    pluralize: function(count, word) {
      return count === 1 ? word : word + 's';
    },
    store: function(namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };

  var App = {
    init: function() {
      this.todos = util.store('todos-jquery');

      //  this.todoTemplate = Handlebars.compile($('#todo-template').html());
      this.todoTemplate = Handlebars.compile(document.querySelector('#todo-template').innerHTML);

      // this.footerTemplate = Handlebars.compile($('#footer-template').html());
      this.footerTemplate = Handlebars.compile(document.querySelector('#footer-template').innerHTML);
      this.bindEvents();

      new Router({
        '/:filter': function(filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
    bindEvents: function() {


      // $('.new-todo').on('keyup', this.create.bind(this));
      document.querySelector('.new-todo').addEventListener('keyup',this.create.bind(this));  

      //  $('.toggle-all').on('change', this.toggleAll.bind(this));
      document.querySelector('.toggle-all').addEventListener('change',this.toggleAll.bind(this));

      // $('.footer').on('click','.clear-completed',this.destroyCompleted.bind(this));
      document.querySelector('.footer').addEventListener('click',this.destroyCompleted.bind(this));

        // $('.todo-list')
        // .on('change', '.toggle', this.toggle.bind(this))
        // .on('dblclick', 'label', this.editingMode.bind(this))
        // .on('keyup', '.edit', this.editKeyup.bind(this))
        // .on('focusout', '.edit', this.update.bind(this))
        // .on('click', '.destroy', this.destroy.bind(this));

          delegateEvent(todoList,'change','.toggle',this.toggle.bind(this))
          delegateEvent(todoList,'dblclick','label',this.editingMode.bind(this))
          delegateEvent(todoList,'keyup','.edit',this.editKeyup.bind(this))
          delegateEvent(todoList,'focusout','.edit',this.update.bind(this))
          delegateEvent(todoList,'click','.destroy',this.destroy.bind(this))

      },

    render: function() {
      var todos = this.getFilteredTodos();
      // $('.todo-list').html(this.todoTemplate(todos));
      todoList.innerHTML = this.todoTemplate(todos);

      // $('.main').toggle(todos.length > 0); //----------------------------------------------
      document.querySelector('.main').classList.toggle('.hidden',todos.length > 0);

      // $('.toggle-all').prop('checked', this.getActiveTodos().length === 0);
      document.querySelector('.toggle-all').checked = this.getActiveTodos().length === 0;
      this.renderFooter();
      
      //$('.new-todo').focus();
      document.querySelector('.new-todo').focus();

      util.store('todos-jquery', this.todos);
    },
    renderFooter: function() {
      var todoCount = this.todos.length;
      var activeTodoCount = this.getActiveTodos().length;
      var template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, 'item'),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });

      // $('.footer').toggle(todoCount > 0).html(template);
       document.querySelector('.footer').innerHTML = template;
    },
    toggleAll: function(e) {
      // var isChecked = $(e.target).prop('checked');
      var isChecked = e.target.checked;

      this.todos.forEach(function(todo) {
        todo.completed = isChecked;
      });

      this.render();
    },
    getActiveTodos: function() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function() {
      return this.todos.filter(function(todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function() {
      if (this.filter === 'active') {
        return this.getActiveTodos();
      }

      if (this.filter === 'completed') {
        return this.getCompletedTodos();
      }

      return this.todos;
    },
    destroyCompleted: function() {
      this.todos = this.getActiveTodos();
      this.render();
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    getIndexFromEl: function(el) {

      var id = $(el).closest('li').data('id');
      // var id  = el.closest('li').dataset.id;
      var todos = this.todos;
      var i = todos.length;

      while (i--){
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: function(e) {
      // var $input = (e.target);
      var $input = e.target;

      // var val = $input.val().trim();
      var val = $input.value.trim();


      if (e.which !== ENTER_KEY || !val) {
        return;
      }

      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });

      // $input.val('');
      $input.value = '';


      this.render();
    },
    toggle: function(e) {
      var i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    editingMode: function(e) {
      // var $input = $(e.target)
      //   .closest('li')
      //   .addClass('editing')
      //   .find('.edit');
      var $input = e.target.document.querySelectorAll('li').classList.add('editing').contains('.edit');


      // puts caret at end of input


      // var tmpStr = $input.val();
      var tmpStr = $input.value;

      // $input.val('');
      $input.value = '';

      // $input.val(tmpStr);
      $input.value = tmpStr;

      $input.focus(); //----------------------------------------------------------------
    },
    editKeyup: function(e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }

      if (e.which === ESCAPE_KEY) {
        $(e.target)
          .data('abort', true)
          .blur();
      }
    },
    update: function(e) {
      var el = e.target;
      // var $el = $(el);
      var $el = el;
      // var val = $el.val().trim();
      var val = $el.value.trim();

      
      if ($el.data('abort')) {
        $el.data('abort', false);
      } else if (!val) {
        this.destroy(e);
        return;
      } else {
        this.todos[this.getIndexFromEl(el)].title = val;
      }


      this.render();
    },
    destroy: function(e) {
      this.todos.splice(this.getIndexFromEl(e.target), 1);
      this.render();
    }
  };

  App.init();
});
