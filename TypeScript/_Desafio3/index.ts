type Review = number | boolean;
type stars = number | boolean;

function ReviewUsuario(review: Review) {
    if (!review) {
        return "Nota não informada."
    } else {
        if (review === 1) {
            return `Nota ${review} super baixa`;
        } else if (review === 2) {
            return `Nota ${review} muito baixa`;
        } else if (review === 3) {
            return `Nota ${review} baixa`;
        } else if (review === 4) {
            return `Nota ${review} média`;
        } else if (review === 5) {
            return `Nota ${review} alta`;
        }
    }
}


function showStars(name: string, stars: stars) {
    if (typeof stars === "number") {
        switch (stars) {
            case 1:
                return `O(a) usuário(a) ${name} avaliou este filme como horrível.`;
            case 2:
                return `O(a) usuário(a) ${name} avaliou este filme como mediano.`;
            case 3:
                return `O(a) usuário(a) ${name} avaliou este filme como bom.`;
            case 4:
                return `O(a) usuário(a) ${name} avaliou este filme como ótimo.`;
            case 5:
                return `O(a) usuário(a) ${name} avaliou este filme como excelente.`;
            default:
                return `O(a) usuário(a) ${name} avaliou este filme em ${stars} estrelas.`;
        }
    } else if (typeof stars == "boolean") {
        if (stars === false) {
            return `O(a) usuário(a) ${name} não deixou uma avaliação.`;
        } else {
            return `Avaliação inválida.`;
        }  
    };
};


console.log(ReviewUsuario(2));
console.log(ReviewUsuario(false));
console.log(ReviewUsuario(3));
console.log(ReviewUsuario(5));

