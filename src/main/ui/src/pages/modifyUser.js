import { useState, useEffect,useMemo } from "react";
import Table from '../components/table/index';
// import CustomSelect from "../../components/customSelect";
// import { getQueryDate, activitySelector } from "../../helpers/functions";
// import { AiFillDelete } from "react-icons/ai";
import useRequest from "../hooks/use-request";
import { timeTableColumnsGenerator } from "../components/entity/columnsTimeTableToModify";
// import { FetchData } from '../../helpers/fetcData';

// import { dataWrapper } from '../../helpers/dataMapper';
// import TabComponent from '../../components/tab/tab'
// import CustomClipLoader from "../../components/loader";
// import Button from '../../components/button';
// import ErrorMessage from '../../components/error/template';
// import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import useFetchCustom from "../hooks/use-fetch";
// import NoData from "../../components/svg/no-data"
import _ from 'lodash';



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ModifyUsers = () => {


    const [table, setTable] = useState(null)
const [id2,SetId] = useState(1);
    const [rowId, setRowId] = useState("")

    const [data, setData] = useState(null)
    const [errorMessageTemplate, setErrorMessageTemplate] = useState(null)

const members = useFetchCustom('http://localhost:8080/users');

    const { doRequest, errors } = useRequest({
        url: 'http://localhost:8080/users/del',
        method: 'post',
        body: 2,
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
        setData(members.response)
        // console.log('users: ' + members);
        // const users = [
        //     {
        //         firstName: 'Vezeték név',
        //         secondName: "keresztnév",
        //         telNumber: "21321321321",
        //         address: "asdsadsad"
        //     },
        //     {
        //         firstName: 'Vezeték név',
        //         secondName: "keresztnév",
        //         telNumber: "21321321321",
        //         address: "asdsadsad"
        //     },
        //     {
        //         firstName: 'Vezeték név',
        //         secondName: "keresztnév",
        //         telNumber: "21321321321",
        //         address: "asdsadsad"
        //     },
        //     {
        //         firstName: 'Vezeték név',
        //         secondName: "keresztnév",
        //         telNumber: "21321321321",
        //         address: "asdsadsad"
        //     },

        // ]
   
     
    }, [members])




    useEffect(() => {
        if (rowId !== "") {
            handleDelete()
        }
    }, [rowId])

    useEffect(() => {
        if (!_.isNull(data)) {
            console.log("members: ",data)
             setTable(<Table data={data} columns={timeTableColumnsGenerator(handChangeRowID)} />)
        }
    }, [data])
    return (
        <div className="page">
            <>
                <div className='authWrapper modify'>
                    <div className='timeTable-wrapper'>
                        {table}
                    </div>
                </div>
            </>
        </div>)
}
export default ModifyUsers;
