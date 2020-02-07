import React, { Component } from 'react'
import apis from '../../api/' 
export default class NewMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
                title:'',
                rating: 0,
                comment:''
        }
    }
    handleInputTitle = (e) =>{
        const value = e.target.value
        this.setState({title:value})
    }

    handleInpuRating = (e) =>{
        const value = e.target.validity.valid
        ? e.target.value
        : this.state.rating
        this.setState({rating:value})
    }

    handleInputComment = (e) =>{
        const value = e.target.value
        this.setState({comment:value})
    }

    handleSendData = async () => {
        const data = this.state;
        await apis.sendMovie(data).then(res =>{
            window.alert('New review added')
            this.setState({
                title:'',
                rating: 0,
                comment:''
            })
        })
    }


    render() {
        return (
            <div className = 'container form-group'>
                <h1>Add new review</h1>
                <label htmlFor='title'>title</label>
                <input
                    name='title'
                    type = 'text'
                    className = 'form-control'
                    value = {this.state.title}
                    onChange = {this.handleInputTitle}
                />

                <label htmlFor='rating'>rating</label>
                <input
                    name='rating'
                    type = 'number'
                    className = 'form-control'
                    min = '0'
                    max = '10'
                    value= {this.state.rating}
                    onChange = {this.handleInpuRating}

                />

                <label htmlFor='comment'>comment</label>
                <input
                    name='comment'
                    type = 'text'
                    className = 'form-control'
                    value = {this.state.comment}
                    onChange = {this.handleInputComment}
                />
               <button 
                    className = 'btn btn-info'
                    onClick = {this.handleSendData}
                >Add review </button>
            </div>
 
        )
    }
}
