function tabela()
{
    document.write("<div>")

    for (let i = 1; i <= 10; i++)
    {

        document.write("<table>")
        document.write("<thead>")
        let titulo = "<th> Produtos de " + i + "<br> </th>"
        document.writeln(titulo)
        document.write("</thead>")
    

        for(let j = 1; j <= 10; j++)
        {
            document.write("<body>")
            document.write("<tr>")
            document.write("<td> " + i + " X " + j + "</td>")
            document.write("<td class=resultado> " + i*j + "</td> <br>")
            document.write("</tr>")
            document.write("</tbody>")
        }

        document.write("</table>")
    }

    document.write("</div>")

}