import React from 'react';

// let today = new Date()
// let tomorrow = new Date()
// tomorrow.setDate(tomorrow.getDate() + 1)

// today = today.toISOString().split('T')[0]
// tomorrow = tomorrow.toISOString().split('T')[0]

// class HotelsSearchForm extends React.Component {
//   state = {
//     // form values
//     from: '', // hidden by default
//     where: '',
//     dateCheckIn: today,
//     dateCheckOut: tomorrow,
//     rooms: 1,
//     addCar: false,
//     addFlight: false,

//     // when user click on field and overlay shows up
//     travelerControlPanelOpen: false,
//     searchOpen: false,
//     datesOpen: false,
//     fromInputHidden: false // show input when user set addFlight=true

//   }


//   renderSearchInput() { // enter location
//     let labelStyle = (this.state.where.length > 0) ? { opacity: 1 } : {};
//     return <div className="input-location">
//       <label className="hidden-where" style={labelStyle}> Where to?</label>
//       <svg className="location-icon" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" color="blue" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z"></path></svg>
//       <input type="text" onChange={(e) => this.setState({ where: e.target.value })} value={this.state.where} placeholder="Where to?" />
//     </div>
//   }

//   renderDateRange() { // enter the date range
//     return <div className="input-date-range">
//       <label className="input-date-range-label"> Check-in - Check-out</label>
//       <svg className="date-range-icon" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" color="blue" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>
//       <input className="dates1" type="date" min={today} max={this.state.dateCheckOut} onChange={(e) => this.setState({ dateCheckIn: e.target.value })} value={this.state.dateCheckIn} />
//       <span> - </span>
//       <input className="dates2" type="date" min={this.state.dateCheckIn} onChange={(e) => this.setState({ dateCheckOut: e.target.value })} value={this.state.dateCheckOut} />
//     </div>
//   }

//   renderTravelerRoomsControlPanel() { // enter the nr of people traveling
//     return <div className="input-nr-people">
//       <label className="input-date-range-label"> Room</label>
//       <svg className="nr-people-icon" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" color="blue" tabIndex="-1" focusable="false" aria-hidden="true" role="img"><path d="M12.6 10.1C11.8 8 9.8 6.5 7.5 6.5 4.4 6.5 2 8.9 2 12s2.4 5.5 5.5 5.5c2.4 0 4.4-1.5 5.1-3.6h4v3.6h3.6v-3.7H22v-3.7h-9.4zm-5.1 3.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"></path></svg>


//       <svg className="arrowdown-img" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" aria-hidden="true" tabIndex="-1" focusable="false" color="gray" role="img"><path d="M7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6-6-6L7.4 8z"></path></svg>

//       <select className="select-options" id="roomCount" name="roomCount" fontSize="2,,1" color="primary" onChange={(e) => this.setState({ rooms: e.target.value })} value={this.state.rooms}>
//         <option value="1" label="1 Room">1 Room</option>
//         <option value="2" label="2 Rooms">2 Rooms</option>
//         <option value="3" label="3 Rooms">3 Rooms</option>
//         <option value="4" label="4 Rooms">4 Rooms</option>
//         <option value="5" label="5 Rooms">5 Rooms</option>
//         <option value="6" label="6 Rooms">6 Rooms</option>
//         <option value="7" label="7 Rooms">7 Rooms</option>
//         <option value="8" label="8 Rooms">8 Rooms</option>
//         <option value="9" label="9 Rooms">9 Rooms</option>
//         <option value="10" label="10+ Rooms">10 Rooms</option>
//       </select>

//     </div>
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//   }


//   render() {
//     let checkboxChecked = <svg className="sc-jTzLTM hwzEEW sc-bdVaJa BeUQO" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" aria-hidden="true" tabIndex="-1" focusable="false" data-name="checked" role="img"><path d="M6 3h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3zm4 14l9-8.6L17.6 7 10 14.3l-3.6-3.5L5 12.2l5 4.8z"></path></svg>

//     let checkboxNotChecked = <svg className="sc-fjdhpX fuYcGO sc-bdVaJa BeUQO" viewBox="0 0 24 24" height="24" width="24" fill="currentcolor" aria-hidden="true" tabIndex="-1" focusable="false" data-name="empty" role="img"><path d="M6 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H6zm0-2h12c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3z"></path></svg>


//     return <form className="searchBox-form" onSubmit={this.onSubmit}>
//       {this.renderSearchInput()}
//       {this.renderDateRange()}
//       {this.renderTravelerRoomsControlPanel()}
//       <button className="submitButton">Find Your Hotel</button>
//       <div>
//         <p className="bundle-save"> Bundle + Save</p>
//         {/* <DateRangePicker/> */}


//         < input type="checkbox" className="checkbox" />
//         <span className="checkbox1" onClick={() => this.setState({ addCar: !this.state.addCar })}>
//           {this.state.addCar ? checkboxChecked : checkboxNotChecked}
//         </span>
//         <label className="checkbox-label">Add a car </label>


//         < input type="checkbox" className="checkbox" />
//         <span className="checkbox2" onClick={() => this.setState({ addFlight: !this.state.addFlight })}>
//           {this.state.addFlight ? checkboxChecked : checkboxNotChecked}
//         </span>
//         <label className="checkbox-label"> Add a flight </label>
//       </div>
//     </form>
//   }
// }
// export default HotelsSearchForm;

let today = new Date();
let tomorrow = new Date(today);

today = today.toISOString().split('T')[0]; //toLocaleDateString() for local time
tomorrow = tomorrow.setDate(tomorrow.getDate() + 1);

class HotelsSearchForm extends React.Component {
  state = {
    // form values
    checkIn: today,
    checkOut: tomorrow,
    rooms: 1,
    where: '',
    from: '', // hidden by default
    addCar: false,
    addFlight: false


    //     from: '', // hidden by default
    //     where: '',
    //     dateCheckIn: today,
    //     dateCheckOut: tomorrow,
    //     rooms: 1,
    //     addCar: false,
    //     addFlight: false,

    //     // when user click on field and overlay shows up
    //     travelerControlPanelOpen: false,
    //     searchOpen: false,
    //     datesOpen: false,
    //     fromInputHidden: false // show input when user set addFlight=true
  }


  FromInput = () => {
    let labelShow = (this.state.from.length > 0 ? { opacity: 1 } : {});
    let ShowFrom = (this.state.addFlight === true ? { display: 'block' } : {})
    return (
      <div className='inputbox width100 opacity-none' style={ShowFrom}>
        <label className='label-where' style={labelShow}>From to?</label>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text' placeholder='From to?'
          onChange={(event) => this.setState({ from: event.target.value })}
          value={this.state.from} />
      </div>
    );
  }

  SearchInput = () => {
    let labelShow = (this.state.where.length > 0 ? { opacity: 1 } : {});
    return (
      <div className='inputbox width100'>
        <label className='label-where' style={labelShow}>Where to?</label>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type='text' placeholder='Where to?'
          onChange={(event) => this.setState({ where: event.target.value })}
          value={this.state.where} />
      </div>
    );
  }
  DateRange = () => {
    return (

      <div className='inputbox width32 flex'>
        <label className='label-date-range'>Check In/Out</label>
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <input type='date' placeholder='Check in' className='datein'
          min={today}
          max={this.state.checkOut}
          value={this.state.checkIn}
          onChange={(event) => this.setState({ checkIn: event.target.value })} />



        <input type='date' placeholder='- Check out' className='dateout'
          min={this.state.checkIn}
          value={this.state.checkOut}
          onChange={(event) => this.setState({ checkOut: event.target.value })} />
      </div>

    );
  }
  RoomsPanel = () => {
    return (
      <div className='inputbox width32'>
        <i className="fa fa-key" aria-hidden="true"></i>

        <select id='roomCount' name='roomCount'
          onChange={(event) => this.setState({ rooms: event.target.value })}
          value={this.state.rooms}>
          <option value="1" label="1 Room">1 Room</option>
          <option value="2" label="2 Rooms">2 Rooms</option>
          <option value="3" label="3 Rooms">3 Rooms</option>
          <option value="4" label="4 Rooms">4 Rooms</option>
          <option value="5" label="5 Rooms">5 Rooms</option>
          <option value="6" label="6 Rooms">6 Rooms</option>
          <option value="7" label="7 Rooms">7 Rooms</option>
          <option value="8" label="8 Rooms">8 Rooms</option>
          <option value="9" label="9 Rooms">9 Rooms</option>
          <option value="10" label="10+ Rooms">10 Rooms</option>
        </select>
      </div>
    );
  }

  // OnSubmit = (event) => {
  //   event.preventDefault();
  // }

  render() {

    return (
      <form className="searchbox-form" onSubmit={this.OnSubmit}>
        {this.FromInput()} {/*hidden by default*/}
        {this.SearchInput()}
        {this.DateRange()}
        {this.RoomsPanel()}
        <input className="submitButton width32" type='submit' value='Find Your Hotel' />
        <div className='extra-accomodation'>
          <p className='bundleSave'>Bundle + Save</p>

          <label className='checkbox-label' >Add a car
          <input type='checkbox' className='checkbox'
              onChange={() => this.setState({ addCar: !this.state.addCar })}
              value={this.state.addCar} />
            <span className="checkmark"></span>
          </label>

          <label className='checkbox-label' >Add a flight
          <input type='checkbox' className='checkbox'
              onChange={() => this.setState({ addFlight: !this.state.addFlight })}
              value={this.state.addFlight} />
            <span className="checkmark"></span>
          </label>

        </div>
        <div className='free-cancellation'>Book a room with free cancellation for flexibility</div>
      </form>
    );
  }
}

export default HotelsSearchForm;