import { useState } from "react";

const MultiSteps = ({isOpenStep, numberOfSteps, content}) => {
    // const numberOfSteps = 2;
    // const content = [<p className="text-main-red">contenu 1</p>, "contenu 2"];
    // console.log(content);
    const steps = [];
    for (let i = 0; i < numberOfSteps; i++) {
        steps.push(content[i]);
    }

    return (
        steps[isOpenStep]
    )
}
export default MultiSteps;