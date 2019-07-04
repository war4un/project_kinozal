import React, {Component} from 'react'
import './Cinema_hall.css'

const state = {
    places: [1, 2, 3, 4, 5, 6, 7, 8]
};
class HallDA extends Component {
    constructor(state) {
		super(state);
		
    }
    deleteItem(index) {
        const element = this.index.current;
        element.classList.add('hall');
		//state.items.splice(index, 1);
		//this.setState({items: state.items});
    }
    
    // const itemcss = cn(
    //     'hall-ssssss',
    //     {
    //         'hall': broned
    //className={imemcss}
    // })

    render() {
        const list = state.places.map((item, index) => {
			return <li ref={index}  key={index} onClick={this.deleteItem.bind(this, index)}>
				
			</li>;
		});

        return (
            <div>
                <ul className="content--hall">
                    {list}
                </ul>
            </div>
        )
    }
}

export default HallDA