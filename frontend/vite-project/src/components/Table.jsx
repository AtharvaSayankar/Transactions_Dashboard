import React from 'react'

const Table = ({responses}) => {
  return (
    <div className='parent'>
        <div className='child'>
          <table className='table'>
            <thead>
              <tr>
                <th className='mg'>ID</th>
                <th className='mg'>Title</th>
                <th className='mg'>Description</th>
                <th className='mg'>Price</th>
                <th className='mg'>Category</th>
                <th className='mg'>Sold</th>
                <th className='mg'>Image</th>
              </tr>
            </thead>
            <tbody>
              {
                responses.map(
                  (obj) => {
                    return (
                      <tr>
                        <td className='mg'>{obj.id}</td>
                        <td className='mg'>{obj.title}</td>
                        <td className='mg'>{obj.description}</td>
                        <td className='mg'>{obj.price}</td>
                        <td className='mg'>{obj.category}</td>
                        <td className='mg'>{obj.sold ? 'yes' : 'no'}</td>
                        <td className='mg'><img src={obj.image} alt="" width={90} height={100} />{ }</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Table