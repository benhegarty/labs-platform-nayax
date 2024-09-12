import os

def split_tables_export(file_path):
    # Read the content of the input file
    with open(file_path, 'r') as file:
        tables_export = file.read()

    # We will now iterate through the file and extract each table by counting brackets
    exports = []
    current_table = []
    bracket_count = 0
    collecting = False
    table_name = None

    for line in tables_export.splitlines():
        # Identify the table start (i.e., a key with a colon)
        if not collecting and ':' in line:
            # Start of a new table
            parts = line.split(':', 1)
            table_name = parts[0].strip()
            current_table.append(f'export const {table_name} = {parts[1].strip()}')
            collecting = True
            bracket_count = parts[1].count('{') - parts[1].count('}')
        elif collecting:
            # Continue collecting the current table
            current_table.append(line)
            bracket_count += line.count('{') - line.count('}')
            
            # When bracket count goes back to 0, we've finished the table
            if bracket_count == 0:
                exports.append("\n".join(current_table) + ";\n")
                current_table = []
                collecting = False

    # Get the output file path by adding "_split" suffix
    output_file_path = os.path.splitext(file_path)[0] + "_split.ts"
    
    # Write the individual exports to the new file
    with open(output_file_path, 'w') as output_file:
        output_file.write("\n".join(exports))
    
    print(f"Split tables exported to: {output_file_path}")

# Example usage
input_file = 'tables.ts'  # Replace with your actual file path
split_tables_export(input_file)
