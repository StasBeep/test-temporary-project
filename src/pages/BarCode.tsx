const content = {
    type: "Frontend React Developer", // #70d6ff
    name: "Frontender Name", // #ff70a6
    age: "12", // #ff0a54
    skills: "HTML, CSS, JavaScript, Jquery, PHP, Canvas, Effector, Node.js.", // #ff9770
    date: "07.02.2025", // #bfd200
};

const checkSum = []; // #000000

const infoBlock = document.getElementById("info") as HTMLElement;

let chapter: any = [];
let chapterCode: any = [];

const codeDop = (strokaCode: string) => {
    //@ts-ignore
    return strokaCode.map((item) => {
        for (let i = item.length; i < 8; i++) {
            item = "0" + item;
        }
        return item;
    });
};

const colorBlock = (array: any, color: string) => {
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) === 0) {
            chapter.push(`<div class="white-block"></div>`);
            chapterCode.push(0);
        } else {
            chapter.push(
                `<div class="white-block" style="background-color: ${color}"></div>`
            );
            chapterCode.push(1);
        }
    }

    return chapter;
};

const sizeText = (text: string, s: number) => {
    for (let i = text.length; i < s; i++) {
        text += " ";
    }

    return text;
};

const coderCode = (text: any) => {
    //@ts-ignore
    return text.split("").map((item) => item.charCodeAt(0).toString(2));
};

content.type = sizeText(content.type, 32);
const asciType = coderCode(content.type);
const typeCode = codeDop(asciType);
colorBlock(typeCode.join(""), `#70d6ff`);

content.name = sizeText(content.name, 16);
const nameCode = codeDop(coderCode(content.name));
colorBlock(nameCode.join(""), `#ff70a6`);

content.age = sizeText(content.age, 2);
const skillsCode = codeDop(coderCode(content.age));
colorBlock(skillsCode.join(""), `#ff0a54`);

content.skills = sizeText(content.skills, 64);
const ageCode = codeDop(coderCode(content.skills));
colorBlock(ageCode.join(""), `#ff9770`);

content.date = sizeText(content.date, 10);
const dateCode = codeDop(coderCode(content.date));
colorBlock(dateCode.join(""), `#bfd200`);

for (let i = 0, sum = 0; i <= chapterCode.length; i++) {
    if (i % 32 === 0 && i !== 0) {
        if (sum % 2 === 0) {
            checkSum.push(0);
        } else {
            checkSum.push(1);
        }
        sum = +chapterCode[i];
    } else {
        sum += Number(chapterCode[i]);
    }
}

colorBlock(checkSum.join(""), `#000000`);

infoBlock.innerHTML =
    '<div style="display: flex; flex-wrap: wrap; width: 256px; height: 100%;">' +
    chapter.join("") +
    "</div>";

const BarCode = () => {
    return <div id="info"></div>
}

export default BarCode;