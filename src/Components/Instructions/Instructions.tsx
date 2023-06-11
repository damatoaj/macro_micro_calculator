import React, {memo} from "react";
import { useNavigate } from "react-router-dom";

type instructionsScreenProps = {
    heading: string;
    paragraphs: string[];
    nextURL : string;
    title: string;
}

type instructionsProps = {
    heading: string;
    paragraphs: string[];
}

type paragraphs = {
    paragraphs : string[];
}

type paragraphProps = {
    paragraph: string;
    i: number;
}

const Paragraph = memo(({paragraph, i} : paragraphProps): React.ReactElement => {
    return <li key={i}><p>{paragraph}</p></li>
})

const Paragraphs = memo(({paragraphs}: paragraphs) => {
    const makeParagraphs = (paragraphs: string[]) => paragraphs.map((paragraph:string, i:number) => <Paragraph paragraph={paragraph} i={i} />);
    return (
        <ol>{makeParagraphs(paragraphs)}</ol>
    )
})

const Instructions = memo(({heading, paragraphs}:instructionsProps) => {
return (
    <article>
        <h1>{heading}</h1>
        <Paragraphs paragraphs={paragraphs}/>
    </article>
)})

const InstructionsScreen = memo(({title, nextURL, heading, paragraphs}:instructionsScreenProps) => {
    const navigate = useNavigate()

    return <main>
        <h1>{title}</h1>
        <Instructions heading={heading} paragraphs={paragraphs} />
        <button type="button"  onClick={()=> navigate(nextURL)}>Click to Begin</button>
    </main>

})

export default InstructionsScreen