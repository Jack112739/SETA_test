def str_with_most_frequent_length(strings: list[str]) -> list[str]:
    if len(list) == 0:
        return []
    
    strlen_count = {}
    for string in strings:
        current_strlen = len(string)
        if current_strlen not in strlen_count:
            strlen_count[current_strlen] = 1
        
        else:
            strlen_count[current_strlen] += 1

    most_frequent_length = len(strings[0])
    for (length, count) in strlen_count:
        if count > strlen_count[most_frequent_length]:
            most_frequent_length = length

    return [s for s in strings if len(s) == most_frequent_length]
