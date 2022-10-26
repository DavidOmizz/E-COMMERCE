import React from 'react'

function Contact() {
  return (
    <div className='container-fluid'>
        <div className='row mt-5 justify-content-center'>
          <div className='col-md-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15852.325799513645!2d3.3424303!3d6.6368069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6c2be6ac91deac5!2sDavidOmizz!5e0!3m2!1sen!2sng!4v1665273940790!5m2!1sen!2sng" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-md-5 col-10'>
              <form className='mt-5'>
              <div className='p-5 shadow bg-body'>
                    <label for="exampleFormControlInput1" class="form-label">Name:</label>
                    <input type="text" name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Enter fullname"/>
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
                    <label for="exampleFormControlInput1" class="form-label">Message:</label>
                    <input type="textarea"  name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Type your messsage here..."/>
                    <button className='btn btn-primary d-flex mx-auto mt-3'>submit</button>
                    </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact