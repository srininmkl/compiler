var detectGradient = (similarity) => {
    
    if (similarity <= 10)
        return '#00AAFD'

    else if (similarity >= 11 && similarity <= 30)
        return '#13AFE1'


    else if (similarity >= 31 && similarity <= 50)
        return '#26B4C5'


    else if (similarity >= 51 && similarity <= 70)
        return '#3AB9A9'


    else if (similarity >= 71 && similarity <= 90)
        return '#4DBE8D'


    else if (similarity >= 91 && similarity <= 100)
        return '#61C372'
}

let colors =  [{
    id:1,
    min:0,
    max:10,
    color:'#00AAFD',
},
{
    id:2,
    min:11,
    max:30,
    color:'#13AFE1',
},
{
    id:3,
    min:31,
    max:50,
    color:'#26B4C5',
},
{
    id:4,
    min:51,
    max:70,
    color:'#3AB9A9',
},{
    id:5,
    min:71,
    max:90,
    color:'#4DBE8D',
}
,{
    id:6,
    min:91,
    max:100,
    color:'#61C372',
}]


export { detectGradient , colors};

