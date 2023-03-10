import React, { useState, useEffect } from 'react';
import { getList } from "./services";
import './index.css';

export default function ListTableComponent() {
    const [listData, setListData] = useState([]);
    const [valuePage, setValuePage] = useState({
        curPage: 1, // Khởi tạo page hiện tại là 1
        totalPages: 10, // Tổng số trang
    });
    const [value, setValue] = useState(null);

    useEffect(() => {
        getList().then((res) => {
            setListData(res);
        });
    }, [value]);

    const handleSearch = () => {

    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div>
                <p>List data</p>
                <hr />
                <div className='displayElements'>
                    <p>전체</p>
                    <div>
                        <select onChange={(e) => handleChange(e)}>
                            <option value="전체">전체</option>
                            <option value="상품명">상품명</option>
                            <option value="브랜드">브랜드</option>
                            <option value="상품내용">상품내용</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => handleChange(e)} />
                    </div>
                    <button type="button" onclick={() => handleSearch()}>Search</button>
                </div>
            </div>
            <p>Total records: {listData?.total}</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>상품번호</th>
                            <th>상품명</th>
                            <th>브랜드</th>
                            <th>상품내용</th>
                            <th>가격</th>
                            <th>평점</th>
                            <th>재고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listData?.products.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item?.title}</td>
                                    <td>{item?.brand}</td>
                                    <td
                                        style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {item?.description}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.rating}</td>
                                    <td>{item?.stock}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div id="pagination">

            </div>
        </div >
    )
}