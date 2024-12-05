import {Component} from "react";
import "./QuanLySinhVien.css";


class QuanLySinhVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                phone: '',
                email: ''
            },
            studentList: [],
            indexSelected: -1,
            isValid: false
        };
    }

    handleSubmit = () => {
        if (this.state.isValid) {
            const studentList = [...this.state.studentList];  //tạo bản sao
            if (this.state.indexSelected > -1) {
                studentList[this.state.indexSelected] = this.state.form;
            } else {
                studentList.push({ ...this.state.form, id: studentList.length });
            }
            this.setState({ studentList, form: { name: '', phone: '', email: '' }, indexSelected: -1 });
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value

            return {form}
        }, () => this.checkInvalidForm())
    }

    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }

    handleDelete = (index) => {
        let studentList = [...this.state.studentList];
        studentList.splice(index, 1);
        this.setState({ studentList, indexSelected: -1 });
    }

    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form;
        this.setState({
            isValid: name !== '' && phone !== '' && email !== ''
        });
    }

    render() {
        const {studentList, form} = this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={form.name} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="text" name="phone" value={form.phone} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={form.email} onChange={this.handleChange}/>
                    </div><br/>
                    <button onClick={this.handleSubmit} disabled={!this.state.isValid}>Submit</button>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {studentList.map((student, index) => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button onClick={() => this.handleSelect(student, index)}>Edit</button>
                                    <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default QuanLySinhVien;