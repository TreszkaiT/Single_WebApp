import { useState, useEffect, useMemo } from "react";
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
import { useHistory } from "react-router-dom";
import ErrorMessage from "../components/errorTemplate/template";
import Form
    from "../components/form";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ModifyUsers = () => {


    const [table, setTable] = useState(null)
    const [id2, SetId] = useState(1);
    const [firstName, SetFirstName] = useState(null);
    const [lastName, SetLastName] = useState(null);
    const [telNumber, SetTelNumber] = useState(null);
    const [address, SetAddress] = useState(null);
    const [rowId, setRowId] = useState(null)

    const [data, setData] = useState(null)
    const [errorMessageTemplate, setErrorMessageTemplate] = useState(null)

    const members = useFetchCustom('http://localhost:8080/users');


    let history = useHistory();


    const { doRequest, errors } = useRequest({
        url: `http://localhost:8080/users/${rowId}`,
        method: "delete",
        // body: reguestMethod === "delete" ? (null) : ({
        //     id2,
        //     firstName,
        //     lastName,
        //     telNumber,
        //     address
        // }),
        onSuccess: () => {
            alert("Sikeres törlés.");
            history.push("/");
             //window.location.reload()
        }
    });

    const handChangeRowID = (row, e) => {
        e.preventDefault();

        console.log(row)
        console.log(e)
        setRowId(row.id)
    }

    const handleDelete = (e) => {

        console.log("id: ", id2)
        console.log("RowId: ", rowId)
        try {
            doRequest()
        } catch (error) {
            console.log(error)
        }
    }


    const handleEdit = (row, e) => {

        console.log("modifyUser.js: handleEdit id: ", row)
 //       console.log("RowId: ", e)

        SetFirstName(row.firstName)
        SetLastName(row.secondName)
        SetTelNumber(row.telNumber)
        SetAddress(row.address)
        SetId(row.id)
    }

    useEffect(() => {
        setData(members.response)
        console.log("modifyUser.js: useEffect")
        // FAKE DATA
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
        if (rowId !== null) {
            handleDelete()
        }
    }, [rowId])

    // useEffect(() => {
    //     if (!_.isNull(data)) {
    //         setTable(<Table data={data} columns={timeTableColumnsGenerator(handChangeRowID)} />)
    //     }
    // }, [data])

    return (
        <div className="page">
            {members.error ? (<ErrorMessage message={members.error} />) :
                (
                    <>
                        <div className='authWrapper modify'>
                            <div className='timeTable-wrapper'>
                                {data && <Table data={data} columns={timeTableColumnsGenerator(handChangeRowID, handleEdit)} />}
                            </div>
                            <div className='form-wrapper'>
                                {data && <Form first={firstName} second={lastName} targetAddress={address} phoneNumber={telNumber} id={id2}/>}
                            </div>
                        </div>
                    </>)}
        </div>
    )
}
export default ModifyUsers;
