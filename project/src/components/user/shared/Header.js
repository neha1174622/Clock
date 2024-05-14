import React, {useState, useEffect} from 'react'


const Header = () => {
	

	let time = new Date(); 
	let [x, setX] = useState(time.toLocaleTimeString()); // pre defined function to tell current time from client side
	// The toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.
		

	let demo = ()=>{ //to change time not only on page refersh
		let time = new Date();
		setX(time.toLocaleTimeString())
		setTimeout(demo, 1000);
	}

	useEffect(()=>{
		demo();
	},[])
  return (
	<>
	
    
	  {/* for clock  */}
	  <div className='container-fluid bg-info' style={{marginTop : "100px"}}>
		<div className='row'>
			<div className='col-md-12'>
			<h4>{x}</h4>
			</div>
		</div>
	</div>
	  </>
  )
}

export default Header