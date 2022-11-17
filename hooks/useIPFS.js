const useIPFS = (hash, filename) => {
return `https://gateway.pinata.cloud/ipfs/${hash}?filename=${filename}`
};

export default useIPFS;
