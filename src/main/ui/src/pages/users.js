import { useState, useEffect } from "react";
import Table from '../components/table/index';
// import CustomSelect from "../../components/customSelect";
// import { getQueryDate, activitySelector } from "../../helpers/functions";
// import { AiFillDelete } from "react-icons/ai";
import useRequest from "../hooks/use-request";
import { timeTableColumnsGenerator } from "../components/entity/columnsTimeTable";
// import { FetchData } from '../../helpers/fetcData';

// import { dataWrapper } from '../../helpers/dataMapper';
// import TabComponent from '../../components/tab/tab'
// import CustomClipLoader from "../../components/loader";
// import Button from '../../components/button';
// import ErrorMessage from '../../components/error/template';
// import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import useFetch from "../hooks/use-fetch";
// import NoData from "../../components/svg/no-data"
import _ from 'lodash';



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default () => {

    const [list, setList] = useState(null)
    const [table, setTable] = useState(null)

    const [rowId, setRowId] = useState("")
    const [isLoading, setLoading] = useState(false)

    const [data, setData] = useState(null)
    const [errorMessageTemplate, setErrorMessageTemplate] = useState(null)
    // const [users, setUsers] = useState(useFetch("http://localhost:8080/users"))


    const [users, setUsers] = useState([]);
      const users2 = useFetch("http://localhost:8080/users");
      console.log("users2: ",users2)
    // const [users] = useFetch("/users");

    const { doRequest, errors } = useRequest({
        url: '/api/time/delete',
        method: 'post',
        body: {
            user_id: rowId
        },
        // onSuccess: () => Router.push('/')
    });

    const handChangeRowID = (row, e) => {
        e.preventDefault();
        setRowId(row.timeId)
    }

    const handleDelete = () => {
        try {
            doRequest()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const users = [
            {
                firstName: 'Vezeték név',
                secondName: "keresztnév",
                telNumber: "21321321321",
                address: "Nyíregyháza"
            },
            {
                firstName: 'Vezeték név',
                secondName: "keresztnév",
                telNumber: "21321321321",
                address: "asdsadsad"
            },
            {
                firstName: 'Vezeték név',
                secondName: "keresztnév",
                telNumber: "21321321321",
                address: "asdsadsad"
            },
            {
                firstName: 'Vezeték név',
                secondName: "keresztnév",
                telNumber: "21321321321",
                address: "asdsadsad"
            },

        ]

        console.log("users: ", users)
        if (!_.isNull(users)) {
            setTable(<Table data={users} columns={timeTableColumnsGenerator(handChangeRowID)} />)
        }
        else {
            setTable(null)
        }
    }, [])


    useEffect(() => {
        if (rowId !== "") {
            handleDelete()
        }
    }, [rowId])

    return (
        <div className="page">
            <>
                <div className='authWrapper timetable'>
                    <div className='timeTable-wrapper'>
                        {table}
                    </div>
                </div>
            </>
        </div>)
}
