import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion">
      <Card faqs={faqs} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}

function Card({ faqs, openIndex, setOpenIndex }) {
  return (
    <ul>
      {" "}
      {faqs.map((faq, index) => (
        <Content
          faq={faq}
          key={faq.title}
          number={index + 1}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </ul>
  );
}

function Content({ faq, number, index, openIndex, setOpenIndex }) {
  const cardisOpen = index === openIndex;
  function handleOnClick() {
    setOpenIndex(cardisOpen ? null : index);
  }
  return (
    <li className={`item ${cardisOpen ? "open" : ""}`}>
      <Header
        number={number}
        title={faq.title}
        cardisOpen={cardisOpen}
        handleOnClick={handleOnClick}
      />
      {cardisOpen && <Body text={faq.text} />}
    </li>
  );
}

function Header({ title, cardisOpen, handleOnClick, number }) {
  return (
    <>
      <span className="number">{String(number).padStart(2, "0")}</span>
      <span className="title">{title}</span>
      <button className="icon" onClick={handleOnClick}>
        {cardisOpen ? "-" : "+"}
      </button>
    </>
  );
}

function Body({ text }) {
  return (
    <div className="content-box">
      <p>{text}</p>
    </div>
  );
}

export default App;
