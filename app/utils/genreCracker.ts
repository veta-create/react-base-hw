export const genreCracker = (genre: string | undefined) => {
    switch (genre) {
        case "fantasy":
            return "Фэнтези"
        case "horror":
            return "Ужасы"
        case "action":
            return "Боевик"
        case "comedy":
            return "Комедия"
        default:
            return "";
    };
};