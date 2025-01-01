import { Texts } from "@/constants/";

function Index() {
  return (
    <div className="texts" id='texts'>
      {Texts.map((text, idx) => {
        return (
          <div className="text" key={idx}>
            {text}
          </div>
        );
      })}
    </div>
  );
}

export default Index;
