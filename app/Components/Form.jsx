import React from 'react'

export default function Form() {
    return (
        <form >
         <div> <input type="text" name="name" placeholder='name' /></div>
         <div>
          <input type="text" name="email" placeholder='email' />
          </div>
          <button type="submit">Submit</button>
        </form>
      )
}
