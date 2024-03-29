import { Button } from "@mui/material";
import { DocumentProps } from "../utils/models/DocumentProps";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListedDocumentItem(props: DocumentProps) {
  return (
    <tr
      key={props.name}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      {/* <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td> */}
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <a href={props.url} target="_blank">
          {props.name}
        </a>
      </th>
      <td className="px-6 py-4">{props.category}</td>
      <td className="px-6 py-4">{props.size}</td>
      <td className="px-6 py-4">{props.type}</td>
      <td className="px-6 py-4">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-0 rounded">
          <DeleteIcon fontSize="medium"/>
        </Button>
      </td>
    </tr>
  );
}
