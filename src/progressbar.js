import React from "react";

export default function ProgressBar(props) {
    let calcPercentage;
    let progressWidth;
    let error = false;
    let errorStyle = {
        width: "100%",
        backgroundColor: "red",
        justifyContent: "center",
    };

    if (props.percentage) {
        if (props.percentage > 100) {
            error = true;
            console.log("Error: percentage entered is greater than 100");
        } else if (props.percentage < 0) {
            error = true;
            console.log("Error: you entered a negative percentage");
        } else {
            progressWidth = {
                width: props.percentage + "%",
            };
        }
    } else {
        calcPercentage = (props.value / props.maxValue) * 100;
        console.log("percent calc: ", calcPercentage);
        if (calcPercentage > 100) {
            error = true;
            console.log("Error: percentage entered is greater than 100");
        } else if (calcPercentage < 0) {
            console.log("Error: you entered a negative percentage");
        } else {
            progressWidth = {
                width: calcPercentage + "%",
            };
        }
    }

    console.log("props: ", props, "percent after set: ", calcPercentage);
    console.log("progress style: ", progressWidth);

    return (
        <div>
            <div id="progress-bar-outline">
                {error ? (
                    <div id="progress-bar" style={errorStyle}>
                        <i
                            id="progress-bar-text-error"
                            className="fas fa-exclamation-triangle"
                        ></i>
                    </div>
                ) : (
                    <div id="progress-bar" style={progressWidth}>
                        <p id="progress-bar-text">{progressWidth.width}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
