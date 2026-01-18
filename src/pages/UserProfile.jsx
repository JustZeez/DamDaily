// import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../components/Sidebar";


// export default function UserProfile() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-6">
//             <Sidebar/>
//           <div className="bg-white rounded-lg shadow p-6">
//             <h1 className="text-2xl font-bold text-gray-800 mb-6">
//               User Profile
//             </h1>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="h-16 w-16 bg-green-200 rounded-full flex items-center justify-center">
//                   <div className="text-lg text-green-600">JD</div>
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     Dam Daily
//                   </h2>
//                   <p className="text-sm text-green-600">Premium Member</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-sm text-gray-700 mb-1">First Name</div>
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded"
//                     placeholder="John"
//                   />
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-700 mb-1">Last Name</div>
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="text-sm text-gray-700 mb-1">Username</div>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   placeholder="johndoe"
//                 />
//               </div>

//               <div>
//                 <div className="text-sm text-gray-700 mb-1">Email</div>
//                 <input
//                   type="email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   placeholder="johndoe@gmail.com"
//                 />
//               </div>

//               <div>
//                 <div className="text-sm text-gray-700 mb-1">Phone Number</div>
//                 <input
//                   type="tel"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   placeholder="+1-(701)-611-5001"
//                 />
//               </div>

//               <div>
//                 <div className="text-sm text-gray-700 mb-1">Country</div>
//                 <select className="w-full px-3 py-2 border border-gray-300 rounded">
//                   <option value="">Select your country</option>
//                   <option value="afghanistan">Afghanistan</option>
//                   <option value="albania">Albania</option>
//                   <option value="algeria">Algeria</option>
//                   <option value="andorra">Andorra</option>
//                   <option value="angola">Angola</option>
//                   <option value="antigua and barbuda">
//                     Antigua and Barbuda
//                   </option>
//                   <option value="argentina">Argentina</option>
//                   <option value="armenia">Armenia</option>
//                   <option value="australia">Australia</option>
//                   <option value="austria">Austria</option>
//                   <option value="azerbaijan">Azerbaijan</option>
//                   <option value="bahamas">Bahamas</option>
//                   <option value="bahrain">Bahrain</option>
//                   <option value="bangladesh">Bangladesh</option>
//                   <option value="barbados">Barbados</option>
//                   <option value="belarus">Belarus</option>
//                   <option value="belgium">Belgium</option>
//                   <option value="belize">Belize</option>
//                   <option value="benin">Benin</option>
//                   <option value="bhutan">Bhutan</option>
//                   <option value="bolivia">Bolivia</option>
//                   <option value="bosnia and herzegovina">
//                     Bosnia and Herzegovina
//                   </option>
//                   <option value="botswana">Botswana</option>
//                   <option value="brazil">Brazil</option>
//                   <option value="brunei">Brunei</option>
//                   <option value="bulgaria">Bulgaria</option>
//                   <option value="burkina faso">Burkina Faso</option>
//                   <option value="burundi">Burundi</option>
//                   <option value="cabo verde">Cabo Verde</option>
//                   <option value="cambodia">Cambodia</option>
//                   <option value="cameroon">Cameroon</option>
//                   <option value="canada">Canada</option>
//                   <option value="central african republic">
//                     Central African Republic
//                   </option>
//                   <option value="chad">Chad</option>
//                   <option value="chile">Chile</option>
//                   <option value="china">China</option>
//                   <option value="colombia">Colombia</option>
//                   <option value="comoros">Comoros</option>
//                   <option value="congo">Congo</option>
//                   <option value="costa rica">Costa Rica</option>
//                   <option value="croatia">Croatia</option>
//                   <option value="cuba">Cuba</option>
//                   <option value="cyprus">Cyprus</option>
//                   <option value="czech republic">Czech Republic</option>
//                   <option value="denmark">Denmark</option>
//                   <option value="djibouti">Djibouti</option>
//                   <option value="dominica">Dominica</option>
//                   <option value="dominican republic">Dominican Republic</option>
//                   <option value="east timor">East Timor</option>
//                   <option value="ecuador">Ecuador</option>
//                   <option value="egypt">Egypt</option>
//                   <option value="el salvador">El Salvador</option>
//                   <option value="equatorial guinea">Equatorial Guinea</option>
//                   <option value="eritrea">Eritrea</option>
//                   <option value="estonia">Estonia</option>
//                   <option value="eswatini">Eswatini</option>
//                   <option value="ethiopia">Ethiopia</option>
//                   <option value="fiji">Fiji</option>
//                   <option value="finland">Finland</option>
//                   <option value="france">France</option>
//                   <option value="gabon">Gabon</option>
//                   <option value="gambia">Gambia</option>
//                   <option value="georgia">Georgia</option>
//                   <option value="germany">Germany</option>
//                   <option value="ghana">Ghana</option>
//                   <option value="greece">Greece</option>
//                   <option value="grenada">Grenada</option>
//                   <option value="guatemala">Guatemala</option>
//                   <option value="guinea">Guinea</option>
//                   <option value="guinea-bissau">Guinea-Bissau</option>
//                   <option value="guyana">Guyana</option>
//                   <option value="haiti">Haiti</option>
//                   <option value="honduras">Honduras</option>
//                   <option value="hungary">Hungary</option>
//                   <option value="iceland">Iceland</option>
//                   <option value="india">India</option>
//                   <option value="indonesia">Indonesia</option>
//                   <option value="iran">Iran</option>
//                   <option value="iraq">Iraq</option>
//                   <option value="ireland">Ireland</option>
//                   <option value="israel">Israel</option>
//                   <option value="italy">Italy</option>
//                   <option value="jamaica">Jamaica</option>
//                   <option value="japan">Japan</option>
//                   <option value="jordan">Jordan</option>
//                   <option value="kazakhstan">Kazakhstan</option>
//                   <option value="kenya">Kenya</option>
//                   <option value="kiribati">Kiribati</option>
//                   <option value="north korea">North Korea</option>
//                   <option value="south korea">South Korea</option>
//                   <option value="kosovo">Kosovo</option>
//                   <option value="kuwait">Kuwait</option>
//                   <option value="kyrgyzstan">Kyrgyzstan</option>
//                   <option value="laos">Laos</option>
//                   <option value="latvia">Latvia</option>
//                   <option value="lebanon">Lebanon</option>
//                   <option value="lesotho">Lesotho</option>
//                   <option value="liberia">Liberia</option>
//                   <option value="libya">Libya</option>
//                   <option value="liechtenstein">Liechtenstein</option>
//                   <option value="lithuania">Lithuania</option>
//                   <option value="luxembourg">Luxembourg</option>
//                   <option value="madagascar">Madagascar</option>
//                   <option value="malawi">Malawi</option>
//                   <option value="malaysia">Malaysia</option>
//                   <option value="maldives">Maldives</option>
//                   <option value="mali">Mali</option>
//                   <option value="malta">Malta</option>
//                   <option value="marshall islands">Marshall Islands</option>
//                   <option value="mauritania">Mauritania</option>
//                   <option value="mauritius">Mauritius</option>
//                   <option value="mexico">Mexico</option>
//                   <option value="micronesia">Micronesia</option>
//                   <option value="moldova">Moldova</option>
//                   <option value="monaco">Monaco</option>
//                   <option value="mongolia">Mongolia</option>
//                   <option value="montenegro">Montenegro</option>
//                   <option value="morocco">Morocco</option>
//                   <option value="mozambique">Mozambique</option>
//                   <option value="myanmar">Myanmar</option>
//                   <option value="namibia">Namibia</option>
//                   <option value="nauru">Nauru</option>
//                   <option value="nepal">Nepal</option>
//                   <option value="netherlands">Netherlands</option>
//                   <option value="new zealand">New Zealand</option>
//                   <option value="nicaragua">Nicaragua</option>
//                   <option value="niger">Niger</option>
//                   <option value="nigeria">Nigeria</option>
//                   <option value="north macedonia">North Macedonia</option>
//                   <option value="norway">Norway</option>
//                   <option value="oman">Oman</option>
//                   <option value="pakistan">Pakistan</option>
//                   <option value="palau">Palau</option>
//                   <option value="panama">Panama</option>
//                   <option value="papua new guinea">Papua New Guinea</option>
//                   <option value="paraguay">Paraguay</option>
//                   <option value="peru">Peru</option>
//                   <option value="philippines">Philippines</option>
//                   <option value="poland">Poland</option>
//                   <option value="portugal">Portugal</option>
//                   <option value="qatar">Qatar</option>
//                   <option value="romania">Romania</option>
//                   <option value="russia">Russia</option>
//                   <option value="rwanda">Rwanda</option>
//                   <option value="saint kitts and nevis">
//                     Saint Kitts and Nevis
//                   </option>
//                   <option value="saint lucia">Saint Lucia</option>
//                   <option value="saint vincent and the grenadines">
//                     Saint Vincent and the Grenadines
//                   </option>
//                   <option value="samoa">Samoa</option>
//                   <option value="san marino">San Marino</option>
//                   <option value="sao tome and principe">
//                     Sao Tome and Principe
//                   </option>
//                   <option value="saudi arabia">Saudi Arabia</option>
//                   <option value="senegal">Senegal</option>
//                   <option value="serbia">Serbia</option>
//                   <option value="seychelles">Seychelles</option>
//                   <option value="sierra leone">Sierra Leone</option>
//                   <option value="singapore">Singapore</option>
//                   <option value="slovakia">Slovakia</option>
//                   <option value="slovenia">Slovenia</option>
//                   <option value="solomon islands">Solomon Islands</option>
//                   <option value="somalia">Somalia</option>
//                   <option value="south africa">South Africa</option>
//                   <option value="south sudan">South Sudan</option>
//                   <option value="spain">Spain</option>
//                   <option value="sri lanka">Sri Lanka</option>
//                   <option value="sudan">Sudan</option>
//                   <option value="suriname">Suriname</option>
//                   <option value="sweden">Sweden</option>
//                   <option value="switzerland">Switzerland</option>
//                   <option value="syria">Syria</option>
//                   <option value="taiwan">Taiwan</option>
//                   <option value="tajikistan">Tajikistan</option>
//                   <option value="tanzania">Tanzania</option>
//                   <option value="thailand">Thailand</option>
//                   <option value="togo">Togo</option>
//                   <option value="tonga">Tonga</option>
//                   <option value="trinidad and tobago">
//                     Trinidad and Tobago
//                   </option>
//                   <option value="tunisia">Tunisia</option>
//                   <option value="turkey">Turkey</option>
//                   <option value="turkmenistan">Turkmenistan</option>
//                   <option value="tuvalu">Tuvalu</option>
//                   <option value="uganda">Uganda</option>
//                   <option value="ukraine">Ukraine</option>
//                   <option value="united arab emirates">
//                     United Arab Emirates
//                   </option>
//                   <option value="united kingdom">United Kingdom</option>
//                   <option value="united states">United States</option>
//                   <option value="uruguay">Uruguay</option>
//                   <option value="uzbekistan">Uzbekistan</option>
//                   <option value="vanuatu">Vanuatu</option>
//                   <option value="vatican city">Vatican City</option>
//                   <option value="venezuela">Venezuela</option>
//                   <option value="vietnam">Vietnam</option>
//                   <option value="yemen">Yemen</option>
//                   <option value="zambia">Zambia</option>
//                   <option value="zimbabwe">Zimbabwe</option>
//                 </select>
//               </div>

//               <div>
//                 <div className="text-sm text-gray-700 mb-1">Bio</div>
//                 <textarea
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   placeholder="Tell us about yourself..."
//                 ></textarea>
//               </div>

//               <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700">
//                 Update Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import { getUserProfile, updateUserProfile } from "../data/api";
// import { toast } from "react-toastify"; // Optional: for feedback

// export default function UserProfile() {
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     Firstname: "",
//     Lastname: "",
//     Username: "",
//     email: "",
//     Phonenumber: "",
//     country: "",
//     bio: ""
//   });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await getUserProfile(token);
//         if (res.data.success) {
//           setFormData(res.data.data);
//         }
//       } catch (err) {
//         console.error("Error fetching profile", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const res = await updateUserProfile(formData, token);
//       if (res.data.success) {
//         alert("Profile updated successfully!");
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Update failed");
//     }
//   };

//   if (loading) return <div className="p-10 text-center">Loading Profile...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-6">
//           <Sidebar />
//           <div className="bg-white rounded-lg shadow p-6 flex-1">
//             <h1 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h1>

//             <form onSubmit={handleUpdate} className="space-y-6">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="h-16 w-16 bg-green-200 rounded-full flex items-center justify-center text-lg text-green-600 font-bold">
//                   {formData.Firstname?.charAt(0)}{formData.Lastname?.charAt(0)}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">
//                     {formData.Firstname} {formData.Lastname}
//                   </h2>
//                   <p className="text-sm text-green-600">Member</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm text-gray-700">First Name</label>
//                   <input
//                     name="Firstname"
//                     value={formData.Firstname || ""}
//                     onChange={handleChange}
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm text-gray-700">Last Name</label>
//                   <input
//                     name="Lastname"
//                     value={formData.Lastname || ""}
//                     onChange={handleChange}
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700">Username</label>
//                 <input
//                   name="Username"
//                   value={formData.Username || ""}
//                   onChange={handleChange}
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700">Email</label>
//                 <input
//                   name="email"
//                   value={formData.email || ""}
//                   onChange={handleChange}
//                   type="email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-700">Country</label>
//                 <input
//                   name="country"
//                   value={formData.country || ""}
//                   onChange={handleChange}
//                   type="text"
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700">Phone Number</label>
//                 <input
//                   name="Phonenumber"
//                   value={formData.Phonenumber || ""}
//                   onChange={handleChange}
//                   type="tel"
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700">Bio</label>
//                 <textarea
//                   name="bio"
//                   value={formData.bio || ""}
//                   onChange={handleChange}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none"
//                 ></textarea>
//               </div>

//               <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors">
//                 Update Profile
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getUserProfile, updateUserProfile, uploadProfileImage } from "../data/api";
import { toast } from "react-toastify";

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    email: "",
    Phonenumber: "",
    country: "",
    bio: "",
    profilePicture: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log('Token being sent', token);
        if (!token) {
          console.error("No token found, please login again");
          return;
        }
        
        const res = await getUserProfile(token);
        if (res.data.success) {
          setFormData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching profile", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- NEW: Handle Image Upload ---
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('profilePicture', file);

    try {
      const token = localStorage.getItem('token');
      const res = await uploadProfileImage(data, token);
      if (res.data.success) {
        setFormData({ ...formData, profilePicture: res.data.data.profilePicture });
        alert("Picture updated!");
      }
    } catch (err) {
      alert("Upload failed");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await updateUserProfile(formData, token);
      if (res.data.success) {
        alert("Profile updated successfully!");
        toast.success('Profile updated successfully!')
        console.log('Profile updated successfullyy');
        
      }
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />
          <div className="bg-white rounded-lg shadow p-6 flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h1>

            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                {/* Clickable Profile Image */}
                <label className="relative cursor-pointer group">
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  <div className="h-20 w-20 bg-green-200 rounded-full flex items-center justify-center text-xl text-green-600 font-bold overflow-hidden border-2 border-green-100">
                    {formData.profilePicture ? (
                      <img src={formData.profilePicture} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <span>{formData.Firstname?.charAt(0)}{formData.Lastname?.charAt(0)}</span>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="pi pi-camera text-white"></i>
                    </div>
                  </div>
                </label>
                
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {formData.Firstname} {formData.Lastname}
                  </h2>
                  <p className="text-sm text-green-600">Member</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">First Name</label>
                  <input name="Firstname" value={formData.Firstname || ""} onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm text-gray-700">Last Name</label>
                  <input name="Lastname" value={formData.Lastname || ""} onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">Username</label>
                <input name="Username" value={formData.Username || ""} onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input name="email" value={formData.email || ""} onChange={handleChange} type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Country</label>
                <input name="country" value={formData.country || ""} onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Phone Number</label>
                <input name="phone" value={formData.phone || ""} onChange={handleChange} type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 outline-none" />
              </div>

              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}