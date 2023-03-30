
import './App.css';
//Url of the files
const PNG_FILE_URL = `http://localhost:3000/react_tutorial.png`
const PDF_FILE_URL = `http://localhost:3000/react_tutorial.pdf`
const CSV_FILE_URL = `http://localhost:3000/react_tutorial.csv`
const ZIP_FILE_URL = `http://localhost:3000/react_tutorial.zip`
function App() {
  //Button onClick function click 
  const downloadFileAtURL = (url) => {
    //Get the file name part
    const fileName = url.split('/').pop()
    //**********************************
    const aTag = document.createElement("a");
    aTag.href = url
    aTag.setAttribute(`download`, fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove();

  }
  return (
    <div className="App">
      <button onClick={() => { downloadFileAtURL(PNG_FILE_URL) }}>Download PNG button</button>
      <button onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}>Download PDF button</button>
      <button onClick={() => { downloadFileAtURL(CSV_FILE_URL) }}>Download CSV button</button>
      <button onClick={() => { downloadFileAtURL(ZIP_FILE_URL) }}>Download ZIP button</button>


    </div>
  );
}

export default App;
