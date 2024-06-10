import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [contact,setContact]=useState();
  const [url,setUrl]=useState('');
  const [About,setAbout]=useState('');
  const [gender,setGender]=useState('Male');
  const [subject,setSubject]=useState({
    English:true,
    Maths:false,
    Physics:false
  });
  const [resume, setResume] = useState("");
  const [selectedOption, setSelectedOption] =
        useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstname,
        lastName,
        email,
        contact,
        gender,
        selectedOption,
        subject,
        resume,
        url,
        About
    );
  }
  function handleSubjectChange(sub){
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }))};

  function handleReset(){
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
        english: true,
        maths: false,
        physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");

  }


return (
    <div>
    <h1>Form in React</h1>
    <fieldset>
    <form action="#" method="get">
    <label for="firstName">
          FirstName*
    </label>
    <input
    type="text"
    name="firstName"
    id="firstname"
    onChange={(e)=>setFirstName(e.target.value)}
    required
    placeholder="Enter First Name">
    </input>
    
    <label for="lastName">
          Last Name*
    </label>
    <input
    type="text"
    name="lastName"
    id="lastname"
    onChange={(e)=>setLastName(e.target.value)}
    required
    placeholder="Enter Last Name">
    </input>
    <label for="Email">
          Enter Email
    </label>
    <input
    type="email"
    name="Email"
    id="email"
    onChange={(e)=>setEmail(e.target.value)}
    required
    placeholder="Enter Email">
    </input>
    <label for="Contact">
          Contact*
    </label>
    <input
    type="Contact"
    name="firstName"
    id="firstname"
    onChange={(e)=>setContact(e.target.value)}
    required
    placeholder="Enter Mobile Number">
    </input>
    <label for="Gender">
      Gender*
    </label>
    <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === "male"}
        onChange={(e) =>
            setGender(e.target.value)
        }
    />
    Male
    <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === "female"}
        onChange={(e) =>
            setGender(e.target.value)
        }
    />
    Female
    <input
        type="radio"
        name="gender"
        value="other"
        id="other"
        checked={gender === "other"}
        onChange={(e) =>
            setGender(e.target.value)
        }
    />
    Other
    <label for="Subject">
      Your best Subject
    </label>
    <input
        type="checkbox"
        name="lang"
        id="english"
        checked={subject.english === true}
        onChange={(e) =>
            handleSubjectChange("english")
        }
    />
    English
    <input
        type="checkbox"
        name="lang"
        id="maths"
        checked={subject.maths === true}
        onChange={(e) =>
            handleSubjectChange("maths")
        }
    />
    Maths
    <input
        type="checkbox"
        name="lang"
        id="physics"
        checked={subject.physics === true}
        onChange={(e) =>
            handleSubjectChange("physics")
        }
    />
    Physics
<label for="file">Upload Resume*</label>
    <input
        type="file"
        name="file"
        id="file"
        onChange={(e) =>
            setResume(e.target.files[0])
        }
        placeholder="Enter Upload File"
        required
    />
    <label for="url">Enter URL*</label>
    <input
        type="text"
        name="url"
        id="url"
        onChange={(e) =>
            setUrl(e.target.value)
        }
        placeholder="Enter url"
        required
    />
    <select
        name="select"
        id="select"
        value={selectedOption}
        onChange={(e) =>
            setSelectedOption(
                e.target.value
            )
        }
    >
        <option
            value=""
            disabled
            selected={selectedOption === ""}
        >
            Select your Ans
        </option>
        <optgroup label="Beginers">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">
                JavaScript
            </option>
        </optgroup>
        <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">
                Express
            </option>
            <option value="t">
                MongoDB
            </option>
        </optgroup>
    </select>
    <label for="about">About</label>
    <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        onChange={(e) =>
            setAbout(e.target.value)
        }
        placeholder="About your self"
        required
    ></textarea>
    <p>SUBMIT OR RESET</p>
    < button type="submit">
      SUBMIT
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      </form>
    </fieldset>
  </div>
  )
}
export default App
