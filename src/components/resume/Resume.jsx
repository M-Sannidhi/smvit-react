import React from 'react'
import './Resume.css'
import image1 from'../../images/image.jpg';
function Resume() {
  return (
    <div className='resume-container'>
    
   
<center><h3 className='b' >RESUME</h3></center>
<hr/>
<form>
   <center><img src={image1}  classname ="image1" alt=""/></center>
    <h3>m.sannidhi</h3>
    <h3>Email:sannidhi.21cs047@sode-edu.in</h3>
    <h3>Ph-no:7894561230</h3>
     <h2 > PROFILE:</h2>
     <h3><p > B.E student.
        I consider my self a
        responsible and orderly
        person.
        I am looking foward for
        my first work
        experience.
        </p></h3>
    <h2>EDUCATION</h2>
    <h3 >High School:</h3>
        <h4>svs English Medium High School</h4>
        <h3>Pre-University:</h3>
    <h4>poornaprajna  PU College</h4>
    <h2 > SKILLS:</h2>
    <h3>problem solving</h3>
    <h3>Design THinking</h3>
    <h3>Effective-communicater</h3>
    

    <h2> CERTIFICATION:</h2>
    <h3>  Hackathon</h3> 
    <h3>mini-project</h3>
    <h2> PROGRAMMING-LANGUAGES</h2>
   <h3> c</h3>
   <h3>c++</h3>
   <h3>python</h3>
   <h3>java</h3>
</form>
</div>
  )
}

export default Resume