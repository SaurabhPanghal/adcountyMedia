import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Header from '../common/header/header';

export default function Home() {
    const [data, setData] = useState();
    const [page, setPage] = useState([]);
    const [active, setActive] = useState(1);

    const users = (number) => {
        fetch(`https://reqres.in/api/users?page=${number}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("Users data ==> ", res);
                setData(res);
                let items = [];
                for (let i = 1; i <= res?.total_pages; i++) {
                    items.push(i);
                };
                setPage(items);
            })
            .catch(error => {
                console.log("responce error ==> ", error);
            })
    };

    useEffect(() => {
        users(1);
    }, []);

    useEffect(() => {
        users(active);
    }, [active]);

    return (
        <>
            <Header />
            <section>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data?.data.map((val, i) => {
                            return <tr key={i}>
                                <td>{val?.id}</td>
                                <td><img src={val?.avatar} /></td>
                                <td>{val?.first_name}</td>
                                <td>{val?.last_name}</td>
                                <td>{val?.email}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.Prev onClick={() => active > 1 && setActive(active - 1)} />
                    {page.map((val, i) => {
                        return <Pagination.Item key={i} active={(i + 1) === active} onClick={() => setActive((i + 1))}> {val} </Pagination.Item>
                    })}
                    <Pagination.Ellipsis />
                    <Pagination.Next onClick={() => active < data?.total_pages && setActive(active + 1)} />
                </Pagination>
            </section>
        </>
    )
};