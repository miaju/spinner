const spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (const index in spins) {
  setTimeout(() => {
    process.stdout.write(spins[index]);
  }, 100 + (index * 200));
}
