const ImageAnimals = () => {

    const dog = (e) => {
        const imageDog = document.getElementById('image');  
        imageDog.setAttribute('src', 'https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg') 
    }

    const cat = (e) => {
        const imageCat = document.getElementById('image');
        imageCat.setAttribute('src', 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg');
    }

    const fox = (e) => {
        const imageFox = document.getElementById('image');
        imageFox.setAttribute('src', 'https://t1.uc.ltmcdn.com/es/posts/2/1/1/significado_del_zorro_como_animal_de_poder_48112_600.webp');
    }


    return (
        <div>
            <button id='dog' onClick={dog}>Dog</button>
            <button id='cat' onClick={cat}>Cat</button>
            <button id='fox' onClick={fox}>Fox</button>
            <img id='image' width='40%' height='40%' src='' ></img>
        </div>
    );
}
export default ImageAnimals;

/**import { useState } from "react";

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('red');

    const handleColorChange = (selectedColor) =>
        setSelectedColor(selectedColor)

    return (
        <div>
            <h1>The currtent color is: {selectedColor}</h1>
            <div style={{ backgroundColor: selectedColor, width: '100vw', height: '10vh'}}>
                <button onClick={() => handleColorChange('red')}>
                    RED
                </button>
                <button onClick={() => handleColorChange('blue')}>
                    BLUE
                </button>
                <button onClick={() => handleColorChange('green')}>
                    GREEN
                </button>
                <button onClick={() => handleColorChange('purple')}>
                    PURPLE
                </button>
            </div>
        </div>
    )
}



export default ColorPicker; */