import { Send, SendTimeExtension } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function ContactFild() {
  return (
    <div>
        <div className="row mt-4">
            <h2>Contact Our Office</h2>
            <div className="col-8 mx-auto ">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <TextField label='Your Name'
                     style={{width: '100%'}}
                        type='text'
                        required/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <TextField label='Subject'
                    style={{width: '100%' , color: 'red'}}
                        type='text'
                        required/>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <TextField label='Email'
                     style={{width: '100%'}}
                        type='email'
                        required/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <TextField label='Phone'
                    style={{width: '100%'}}
                        type='number'
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                 <div className="col-md-12 col-sm-12">
                 <TextField 
                      required
                      style={{width: '100%'}}
                      label='Your Address' 
                      InputProps={{
                        endAdornment : <InputAdornment position='end'>Bangladesh</InputAdornment>,
                      }}
                      />
                 </div>
              </div>
              <br />
              <div className="row">
                 <div className="col-md-12 col-sm-12">
                 <TextField 
                      required
                      style={{width: '100%'}}
                      label='Write Message' 
                      />
                 </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                    <Button style={{padding: '12px'}} variant='outlined'
                     endIcon={ <Send/>}>
                        Send Message
                    </Button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactFild