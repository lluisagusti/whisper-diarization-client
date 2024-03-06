import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'

const TableExamplePagination = () => (
  <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>


    {/* // fer funcio per deixar en blanc el speaker o speakers que no han parlat */}
      <TableRow>
        <TableCell>
          <Label ribbon>First</Label>
        </TableCell>
        <TableCell>2</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>

      {/* const datos = [
    { primera: 'Primera Fila - Primera Celda', segunda: 'Primera Fila - Segunda Celda', tercera: 'Primera Fila - Tercera Celda' },
    { primera: 'Segunda Fila - Primera Celda', segunda: 'Segunda Fila - Segunda Celda', tercera: 'Segunda Fila - Tercera Celda' },
    // Añade más objetos según sea necesario
  ];

  return (
    <Table>
      <Table.Body>
        {datos.map((fila, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Label>{fila.primera}</Label>
            </Table.Cell>
            <Table.Cell>{fila.segunda}</Table.Cell>
            <Table.Cell>{fila.tercera}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ); */}


      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>


      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>


    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExamplePagination
