const routeVariants = {
    initial : {
        opacity : 0
    },
    final : {
        opacity : 1,
        transition: {
            duration : 0.5
        },
    },
}

const childVariants = {
    initial : {
        y : '30px',
        opacity: 0
    },
    final : {
        y : '0vh',
        opacity: 1,
        transition: {
            duration : 0.3,
            delay: 0.5
        }
    }
}

const cardVariants ={
    visible : {opacity:1, scale: 1, transition: {duration: 0.8}},
    hidden : {opacity: 0, scale: 0},
}

export {routeVariants, childVariants, cardVariants}
