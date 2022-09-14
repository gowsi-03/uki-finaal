import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders, deliverOrder  } from '../actions/orderActions'
import { FaTimes } from 'react-icons/fa'

import Pagination from '../components/Pagination'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  useEffect(() => {
    dispatch(listOrders())
  }, [dispatch, history])

  const updateOrderHandler = (id) => {

    const formData = new FormData();
    formData.set('status', true);

    dispatch(deliverOrder(id, formData))
}

const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 8
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = orders && orders.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = orders && Math.ceil(orders.length / itemsPerPage)


  return (
    <div className='container'>
        <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        <table className='table table-borderless table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <hr></hr>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt}</td>
                <td>Rs{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt
                  ) : (
                    <FaTimes color='red' />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes color='red' />
                  )}
                </td>
                <td>
                  <Link to={`/order/${order._id}`}>
                    <button className='btn btn-info bg-primary btn-sm'>
                      Details
                    </button>
                  </Link>
                </td>
                <td>
                 
                    <button className='btn btn-info bg-primary btn-sm' onClick={() => updateOrderHandler(order._id)}>
                      Update
                    </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <div className='d-flex justify-content-center'>
            <Pagination
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              arrayLength={orders && orders.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
    </div>
  )
}

export default OrderListScreen
