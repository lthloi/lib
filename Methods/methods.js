
// tìm ptu cha có class thỏa ĐK (default)
export default function find_parentEle_hasClass(child_ele, ele_class) {
    while (child_ele.classList.contains(ele_class) == false) {
        child_ele = child_ele.parentElement
    }
    return child_ele
}

// căn giữa theo chiều dọc với ptu cha tại thời điểm display != none
export function alignCenter_absolute_cross(ele_to_align, baseEle) {
    let computedStyleOf_baseEle = getComputedStyle(baseEle)
    let total_heightOf_baseEle =
        computedStyleOf_baseEle.height.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingTop.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderTopWidth.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingBottom.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderBottomWidth.match(/[0-9]+/)[0] * 1
    let computedStyleOf_ele_to_align = getComputedStyle(ele_to_align)
    let total_heightOf_ele_to_align =
        computedStyleOf_ele_to_align.height.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingTop.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderTopWidth.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingBottom.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderBottomWidth.match(/[0-9]+/)[0] * 1
    ele_to_align.style.top =
        (total_heightOf_baseEle - total_heightOf_ele_to_align) / 2 + 'px'
}

// căn giữa theo chiều ngang với ptu cha tại thời điểm display != none
export function alignCenter_absolute_horizontal(ele_to_align, baseEle) {
    let computedStyleOf_baseEle = getComputedStyle(baseEle)
    let total_widthOf_baseEle =
        computedStyleOf_baseEle.width.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.paddingRight.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_baseEle.borderRight.match(/[0-9]+/)[0] * 1
    let computedStyleOf_ele_to_align = getComputedStyle(ele_to_align)
    let total_widthOf_ele_to_align =
        computedStyleOf_ele_to_align.width.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderLeft.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.paddingRight.match(/[0-9]+/)[0] * 1 +
        computedStyleOf_ele_to_align.borderRight.match(/[0-9]+/)[0] * 1
    ele_to_align.style.left =
        (total_widthOf_baseEle - total_widthOf_ele_to_align) / 2 + 'px'
}

// random
export const randoms = (option, lengthOfThis, min, max) => {
    switch (option) {
        case 'number':
            // random from 1 to 10 * lengthOfThis (lengthOfThis has max value is 15)
            if (lengthOfThis < 1) return null
            return Math.floor(Math.random() * (Math.pow(10, lengthOfThis) + 1))
        case 'between_two_number':
            // include min & max
            return Math.floor(Math.random() * (max - min + 1) + min)
        case 'upchar':
            let upchars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            return upchars[
                Math.floor(Math.random() * upchars.length)
            ]
        case 'lowchar':
            let lowchars = 'abcdefghijklmnopqrstuvwxyz'
            return lowchars[
                Math.floor(Math.random() * lowchars.length)
            ]
        case 'char':
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            return chars[
                Math.floor(Math.random() * chars.length)
            ]
        case 'charwithnum':
            let charwithnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            return charwithnum[
                Math.floor(Math.random() * charwithnum.length)
            ]
        case 'name':
            if (lengthOfThis < 2) return null
            let lastName = ''
            let UpperCase_FirstChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let LowerCase_SecondChar = 'aeiouy'
            let LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
            lastName += UpperCase_FirstChar[
                Math.floor(Math.random() * UpperCase_FirstChar.length)
            ]
            lastName += LowerCase_SecondChar[
                Math.floor(Math.random() * LowerCase_SecondChar.length)
            ]
            while (lastName[0] === lastName[1].toLowerCase()) {
                lastName[1] = Math.floor(Math.random() * LowerCase_SecondChar.length)
            }
            for (let i = 0; i < lengthOfThis - 2; i++) {
                lastName += LowerCaseChars[Math.floor(Math.random() * LowerCaseChars.length)]
            }
            return lastName
        default:
            return undefined
    }
}

// withRouter
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom"

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }
    return ComponentWithRouterProp
}