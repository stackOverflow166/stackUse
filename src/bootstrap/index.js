import React from 'react';
import {Button} from 'reactstrap';
import "./index.css"
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow'
import TableColumn from '@material-ui/core/TableCell'
const formattedResult = [
    {
        receiver: {code: "ARBG_PRIV", name: null },
        fields: [
            { field: { code: "SP", name: null },
                rows: [
                    {name: "newAmount", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "paid", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "difference", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    }
                ]
            }
        ]
    },
    {
        receiver: {code: "BRUKER", name: null },
        fields: [
            { field: { code: "SP", name: null },
                rows: [
                    {name: "newAmount", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "paid", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "difference", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    }
                ]
            },
            { field: { code: "FP", name: null },
                rows: [
                    {name: "newAmount", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "paid", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    },
                    {name: "difference", resultPerMonth: [
                            {from: "2018-06-01", to: "2018-06-31", amount: 2662},
                            {from: "2018-07-01", to: "2018-07-31", amount: 2662}
                        ]
                    }
                ]
            },
        ]
    }

]
export default class Example extends React.Component {


    render() {
        const styles = {

        }

        return (
            <div>
                <div className={styles.table}>
                    {
                        formattedResult.map(reciever => (
                            <Table>
                                { reciever.fields.map(field => field.rows.map(row => (
                                    <TableRow>
                                        <TableColumn>
                                            <img
                                                tabIndex="0"
                                                className={styles.expandButton}
                                                src={"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"}
                                                altCode="Timeline.openData"
                                            />
                                            { row.name }
                                        </TableColumn>
                                        { row.resultPerMonth.map(month => (
                                            <TableColumn>
                                                { month.amount }
                                            </TableColumn>
                                        ))}
                                    </TableRow>
                                )))}
                            </Table>
                        ))}
                </div>
            </div>
        )
    }
}
