import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const data = {
    fontFamily: "'Space Mono', monospace",
    headerFontFamily: "'Lato', sans-serif",
    bgColor: "#FFFBEB",
    containerBg: "#4C6444",
    headingColor: "#4C6444",
    subHeadingColor: "#6B4B2E",
    linkColor: "#6B4B2E",
    textColor: "#fff",

    heading: "Events <br/> <span>Scheduled</span>",
    events: [
      {
        date: "04 <br/> may",
        title: "Fashion Shop Opening",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
      {
        date: "10 <br/> may",
        title: "Oliva & pedro wedding",
        info: "Lorem Ipsum is simply dummy simply dummy text of the printing and typesetting industry. ,",
      },
      {
        date: "20 <br/> may",
        title: "Coffe shop invitation",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
    ],
    link: "www.reallygreatsite.com",
  };
  return (
    <div
      style={{
        "--bgColor": data.bgColor,
        "--containerBg": data.containerBg,
        "--headingColor": data.headingColor,
        "--subHeadingColor": data.subHeadingColor,
        "--linkColor": data.linkColor,
        "--textColor": data.textColor,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
