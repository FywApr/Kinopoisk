export const scrollLeft = (htmlElement: HTMLUListElement | any) => {
    if (htmlElement.current) {
        htmlElement.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
};

export const scrollRight = (htmlElement: HTMLElement | any) => {
    if (htmlElement.current) {
        htmlElement.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
};

 export const ratingStyle: string = ((rating: number) => {
        if (rating >= 8) {
            return 'bg-[#3bb33b]';
        } else if (rating < 8 && rating >= 6) {
            return 'bg-[#777]';
        } else if (rating < 6) {
            return 'bg-[#750202]';
        } else {
            return '';
        }
    })(8);