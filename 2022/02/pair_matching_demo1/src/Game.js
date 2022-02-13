import {useState} from 'react';

function shuffle(arr) {
    let copy = [...arr];
    let shuffled = [];
    while (copy.length) {
        let idx = Math.floor(Math.random() * copy.length);
        let el = copy[idx];
        copy.splice(idx, 1);
        shuffled.push(el);
    }
    return shuffled;
}

function Game({data}) {
    let [countries, setCountries] = useState(shuffle(Object.keys(data)));
    let [capitols, setCapitols] = useState(shuffle(Object.values(data)));
    let [selectedCountry, setSelectedCountry] = useState(null);
    let [selectedCapitol, setSelectedCapitol] = useState(null);

    let removePairIfMatch = (country, capitol) => {
        console.log(`Checking if selectedCountry ${country} matches ${capitol}...`);
        if (data[country] === capitol) {
            console.log(`Removing pair (${country}, ${capitol})`);
            setSelectedCountry(null);
            setSelectedCapitol(null);
            let newCountries = [...countries];
            let newCapitols = [...capitols];
            newCountries.splice(newCountries.indexOf(country), 1);
            newCapitols.splice(newCapitols.indexOf(capitol), 1);
            setCountries(newCountries);
            setCapitols(newCapitols);
        }
    };

    let selectedCountryHandler = (country) => {
        console.log(`Selected country: ${country}`);
        setSelectedCountry(country);
        removePairIfMatch(country, selectedCapitol);
    };

    let selectedCapitolHandler = (capitol) => {
        console.log(`Selected capitol: ${capitol}`);
        setSelectedCapitol(capitol);
        removePairIfMatch(selectedCountry, capitol);
    };

    let isError = () => {
        if (!selectedCountry || !selectedCapitol) {
            return false;
        }

        return data[selectedCountry] !== selectedCapitol;
    };

    let pairsSection = [];
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i];
        let capitol = capitols[i];
        let styleCountry = {
            color: selectedCountry === country ? (isError() ? '#ff0000' : '#0000ff') : null
        };
        let styleCapitol = {
            color: selectedCapitol === capitol ? (isError() ? '#ff0000' : '#0000ff') : null
        };
        pairsSection.push(
            <div key={country}>
                <button style={styleCountry}
                        onClick={() => selectedCountryHandler(country)}>{country}</button>
                <button style={styleCapitol}
                        onClick={() => selectedCapitolHandler(capitol)}>{capitol}</button>
            </div>
        )
    }
    return pairsSection.length ? (
        <div>
            {pairsSection}
        </div>
    ) : <div>Thank you for your game. You completed...</div>;
}

export default Game;
