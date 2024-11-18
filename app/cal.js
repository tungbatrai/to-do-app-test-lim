import add from "./services/add";
import muil from "./services/muil";
import sub from "./services/sub";

export default cal = (a, o, b) => {
    switch (o) {
        case '+':
            return add(a, b)
        case '-':
            return sub(a, b)
        case '*':
            return muil(a, b)
        case '/':
            if (b == 0) {
                throw Error('div 0')
            }
            return a / b;
    }
}