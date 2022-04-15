import {
    Button,
    Checkbox,
    Radio,
    Select,
    Table,
    Form,
    Input,
    Textarea,
    Pagination,
    Switch,
    Row,

} from 'ant-design-vue'


const components = [
    Button,
    Checkbox,
    Radio,
    Select,
    Table,
    Form,
    Input,
    Textarea,
    Pagination,
    Switch,
    Row,
]

export const registerComponent = (app) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}