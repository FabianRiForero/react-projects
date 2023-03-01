const getRandomURL = () => {
    const random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string;
}

export const add = (state = { items: [] }, action) => {
    const url = action.data;
    const shortUrl = getRandomURL();
    // if(!state){
    //     state = {};
    //     state.items = [];
    // }
    const temp = [...state.items];
    const newItem = {
        url: url.toString(),
        shortUrl,
        views: 0
    };
    temp.unshift(newItem);
    localStorage.setItem('urls', JSON.stringify(temp));
    return { items: [...temp] };
}

export const addView = (state, action) => {
    const data = localStorage.getItem('urls');
    if (data) {
        const items = JSON.parse(data);
        const item = items.find(i => i.shortUrl === action.data);
        if(item) {
            item.views++;
            localStorage.setItem('urls', JSON.stringify(items));
            return { items: [...items] };
        }
    }
}

export const load = (state, action) => {
    const data = localStorage.getItem('urls');
    if (data) {
        const temp = JSON.parse(data);
        return { items: [...temp] };
    }
}