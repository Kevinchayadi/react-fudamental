import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }

    render() {
        return(
        <div className='flex justify-center'>
            <h1 className='text-xl bg-amber-50 p-2'>{this.state.count}</h1>
            <button 
            className='bg-black text-white py-1 px-3 mx-1 border rounded-full text-xl'
            onClick={()=>this.setState({count: this.state.count+1})}
            >
                +
            </button>
        </div>

        )
    }
}

export default Counter