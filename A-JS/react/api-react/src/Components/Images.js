import React, { Component } from 'react'

export default class Images extends Component {

    //mounting..
    constructor(props) {
        super(props)
    
        this.state = {
             url:'',
             isLoading: false,
             fetchedData: []
        }
    }


    //mounting..
    static getDerivedStateFromProps(props, state) {
        
        if(state.url !== props.url){

            return (state.url = props.url);
        }else{
            return null;
        }

    }

    //mounting..
    componentDidMount() {

        this.setState({isLoading: true})

        fetch(this.state.url)

            .then((resphonse)=>{

                return(resphonse.json())
            })
            .then((data)=>{

                this.setState({
                    fetchedData : data.hits,
                    isLoading : false 
                })
                console.log(this.state.fetchedData)
            })
           
    }

    render() {

        let image_array = null;
        let loading = null;
        if(this.state.isLoading){
            loading = 
                    <div>
                        <h2>is loading...</h2>
                        <div className = "load-div"></div>
                    </div>
        }

        if(this.state.fetchedData.length > 0){
            image_array = this.state.fetchedData.map((item, index)=>{
                let style = {
                    width    : item.previewWidth,
                    height   : item.previewHeight,
                    display  : 'inline-block'
                }
                return(
                    <div key = {index} style = { style }>
                        <img src = {item.previewURL}
                        />
                    </div>
                )
            })
        }

        return (
            <div>
                    {loading}
                    {image_array}
            </div>
        )
    }

}
