import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  const downloadFileAtURL = () => {
    const url = '/AlteaKapxhiu-CV.pdf'; // Relative path to the file in the public folder
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AlteaKapxhiu-CV.pdf'; // The name the file will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        

        

       <section className='mb-4'><section className='mb-4'>
       <MDBBtn outline color="light" floating className='m-1' href='sms:+3550675548654?body=Hello%20there!' role='button'>
  <MDBIcon icon="phone" />
</MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://linktr.ee/alteakapxhiu' role='button'>
            <MDBIcon icon="globe" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1'  href='mailto:alteakapxhiu@gmail.com' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://drive.google.com/file/d/11oD8v2CuYcBA0hX1REPUVbmNnuAT7y06/view?usp=sharing' role='button'>
            <MDBIcon icon="id-card" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/alteakapxhiu/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href="https://github.com/alteakapxhiu" role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
            <section className=''>
                
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Don't forget to connect with me through my socials !</strong>
                </p>
              </MDBCol>
              
              <MDBCol size="auto">
                <a href="https://www.linkedin.com/in/alteakapxhiu/" target="_blank" rel="noopener noreferrer">
                    <MDBBtn outline color="light" type="button" className="mb-4">
                    Connect
                    </MDBBtn>
                </a>
            </MDBCol>

              <MDBCol size="auto">
                <a href="https://github.com/alteakapxhiu" target="_blank" rel="noopener noreferrer">
                    <MDBBtn outline color="light" type="button" className="mb-4">
                    Follow
                    </MDBBtn>
                </a>
            </MDBCol>

              <MDBCol size="auto">
              <MDBBtn outline color="light" type="button" className="mb-4" href="https://drive.google.com/uc?export=download&id=11oD8v2CuYcBA0hX1REPUVbmNnuAT7y06" target="_blank" role="button">
  ⇩ Download CV
</MDBBtn>
            </MDBCol>
      
    
              <MDBCol size="auto">
              
             


    </MDBCol>
            </MDBRow>
          </form>
        </section><hr/>
          <p>
          Professional web and mobile app developer specializing in delivering innovative and efficient digital solutions. For inquiries, collaborations, or to connect, please contact me.
          </p>
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright: 
        <a className='text-white' href='https://drive.google.com/file/d/11oD8v2CuYcBA0hX1REPUVbmNnuAT7y06/view?usp=drive_link'>
          Altea Kapxhiu 
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
