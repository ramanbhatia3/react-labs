let currentClock

function searchBackend(){
    console.log("request sent to backend")
    // fetch()
}


function debouncedSearchBackend(){
    // when called start the clock for 30ms and if called again then re-start the clock for 30ms
    clearTimeout(currentClock)
    currentClock = setTimeout(searchBackend, 30)
}


debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()