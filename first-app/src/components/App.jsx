import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notesData from "../notes";
function App(){
    return <div>
    <Header/>
    {notesData.map(data=>
        <Note
            key={data.key}
            title={data.title}
            content={data.content}
        />
    )}
   
    <Footer/>
    </div>;
}

export default App;