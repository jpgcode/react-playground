import React, { PropTypes } from 'react'
import { render } from 'react-dom'

const accordeonWrapper = document.querySelectorAll('.accordeon');

const Accordeon = React.createClass({

	getInitialState() {
	    return {
	    	activeTabIndex: 0
	    }
	},

	selectTabIndex(activeTabIndex){
		this.setState({
	      activeTabIndex: activeTabIndex
	    })
	},

	render() {
		
		const { activeTabIndex } = this.state
		const accordeonData = this.props.data;

		const tabs = accordeonData.map((tab, index) => {
			
			const isActive = index === activeTabIndex
      		const classNeeded = isActive ? 'child open' : 'child'

			return (
				<li className="parent" key={tab.id} onClick={() => this.selectTabIndex(index)}>
					{tab.title}
					<ul className={classNeeded}>
						<li>{tab.content}</li>
					</ul>
				</li>
			)
		})

		return (
	    	<div className="accordeon"><ul>{tabs}</ul></div>
	    )
	}

})
 
accordeonWrapper.forEach(function(accordeon){
	const data = JSON.parse(accordeon.getAttribute('data-options'))
	render(<Accordeon data={data}/>, accordeon)
})