import React, { Component } from 'react'
import './form1.css'
class Form1 extends Component {
  render() {
    return (
        <div className='contactContainer'>
            
            <h3>Contact Form</h3>
            <div className='form-card px-1 my-1 '>
           <form>
            <div className='row'>
            <div className='form-group col-sm-6 flex-column d-flex'>
                <label className='form-control-label'> First Name</label>
                <input className='form-control' type='text'/>

            </div>
            <div className='form-group col-sm-6 flex-column d-flex'>
                <label className='form-control-label'> Last Name <span class="text-danger"> *</span></label>
                <input className='form-control' type='text'/>
                
            </div>

            <div className='form-group col-sm-6 flex-column d-flex'>
                <label className='form-control-label'> Email</label>
                <input className='form-control' type='text'/>

            </div>
            <div className='form-group col-sm-6 flex-column d-flex'>
                <label className='form-control-label'> Business Phone</label>
                <input className='form-control' type='text'/>
                
            </div>

            <div className='form-group col-sm-6 flex-column d-flex'>
                <label className='form-control-label'> Company Name <span class="text-danger"> *</span></label>
                <input  className='form-control' type='text'/> 
             </div>
             
                <div className='form-group col-sm-6 flex-column d-flex'> 
                    <label className='form-control-label'> Job Title</label>
                <input className='form-control' type='text'/>
                
            </div>

            <div className='form-group col-sm12 flex-column d-flex'> 
                    <label className='form-control-label'> Street 1</label>
                <input className='form-control' type='text'/>
                
            </div>

            <div className='form-group col-sm-6 d-flex flex-column'>
                <label className='form-control-label'> City</label>
                <input className='form-control ' type='text'/>
            </div>
            <div className='form-group col-sm-6 d-flex flex-column'>
                <label className='form-control-label'> State Provinces</label>
                <input className='form-control' type='text'/>
            </div>

            <div className='form-group col-sm-6'>
                <label className='form-control-label'>Zip/Pincode</label>
                <input type='number' className='form-control'/>
            </div>
            <div className='form-group col-sm-6'>
                <label className='form-control-label'>Country/region</label>
                <input className='form-control' type='text'/>
            </div>
            <div>
                <label className='form-control-label' >Topic <span className='text-danger'>*</span></label>
                <input type='text' className='form-control'/>
            </div>

           </div>

           

           </form>

           </div>
            
           
            
           

      </div>
    )
  }
}

export default Form1