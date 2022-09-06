
import { useState } from "react";
import "../sideBar-component/sideBar.css";
export default function SideBar() {
  const data = [
    {
      title: "ABOUT US",
      state:true,
      data: [{ VALUE: "https://google.com", KEY: "About Themeambience" }],
    },
    {
      title: "CURRENT PROJECTS",
      state:true,
      data: [
        { KEY: "Golf View", VALUE: "https://google.com" },
        { KEY: "Lake View", VALUE: "https://google.com" },
        { KEY: "Fort View", VALUE: "https://google.com" },
        { KEY: "Tirupati Temple Town", VALUE: "https://google.com" },
        
      ],
    },
    {
      title: "COMPLETED PROJECTS",
      state:true,
      data: [
        { KEY: "Ambience Fort", VALUE: "https://google.com" },
        { KEY: "Swapnalok", VALUE: "https://google.com" },
        { KEY: "Indralok", VALUE: "https://google.com" },
        { KEY: "Avenue", VALUE: "https://google.com" },
        { KEY: "Whisper Valley", VALUE: "https://google.com" },
        { KEY: "Walden Club", VALUE: "https://google.com" },
        { KEY: "Ambience Canton", VALUE: "https://google.com" },
        { KEY: "Ambience Anthem", VALUE: "https://google.com" },
        { KEY: "Tirupati Temple Town", VALUE: "https://google.com" },
        { KEY: "@ Kukapally-Emami", VALUE: "https://google.com" },
      ],
    },
    {
      title: "FUTURE PROJECTS",
      state:true,
      data: [
        { KEY: "Theme Fort Vista", VALUE: "https://google.com" },
        { KEY: "Theme Crest", VALUE: "https://google.com" },
        
      ],
    },
    {
      title: "FEEDBACK",
      state:true,
      data: [
        { KEY: "Give Us a Feedback", VALUE: "https://google.com" },
        
      ],
    },
    {
      title: "CONTACT",
      state:true,
      data: [
        { KEY: "Contact Us", VALUE: "https://google.com" },
        
      ],
    }
    
  ];
  const [refresh,setRefresh]=useState(true)

  return (
    <div className="sidebar-wrapper">
    
      {data.map((item, id) => (
        <div className="sidebar-list" key={id}>
             <div style={{color:"white"}}>{refresh}</div>
          <div className="sidebar-list-title" onClick={()=>{item.state=(!item.state);setRefresh(!refresh)}}>
            {item.title} <i className="fas fa-angle-down"></i>
          </div>
          <br />
          <div className="sidebar-list-content">
            {refresh&&item?.data?.map((ite,id) => (
              <a key={id} className="sidebar-list-item" href={ite?.VALUE}>
                {ite.KEY}
                <br />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
